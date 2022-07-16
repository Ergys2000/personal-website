import EditorJS from '@editorjs/editorjs';
import Checklist from '@editorjs/checklist';
import Header from '@editorjs/header';
import Table from '@editorjs/table';
import crypto from 'crypto';
import { useEffect, useState } from 'react';
import { Button, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import EditorJsRenderer from '../editorjs-renderer/EditorJsRenderer';
import { CleanData } from '../editorjs-renderer/types';

let editor: any;

type EditorProps = {
    handleChange: (cleanData: CleanData) => void;
};
export default (props: EditorProps) => {
    const [data, setData] = useState<CleanData>({
        time: '',
        blocks: [],
        version: ''
    });
    const editorId = crypto.randomBytes(20).toString('hex');
    useEffect(() => {
        if (document.getElementById(`editorjs-${editorId}`)) {
            editor = new EditorJS({
                holder: `editorjs-${editorId}`,
                tools: {
                    checklist: Checklist,
                    header: {
                        class: Header,
                        config: {
                            placeholder: "Enter a header",
                            levels: [2, 3, 4],
                            defaultLevel: 3
                        }
                    },
                    table: Table,
                },
                onChange: (api, event) => {
                    api.saver.save().then((res: any) => {
                        setData(res);
                        props.handleChange(res)
                    }).catch((err: any) => console.log(err))
                }
            });
        }
    }, []);
    return (
        <div className='flex flex-col items-stretch w-full min-w-min'>
          <Tabs colorScheme={"blue"} variant={"soft-rounded"}>
            <TabList>
              <Tab color={"gray.300"}>Rich text</Tab>
              <Tab color={"gray.300"}>Rendered</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div id={`editorjs-${editorId}`} className="flex-1">
                </div>
              </TabPanel>
              <TabPanel>
                <EditorJsRenderer cleanData={data} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
    );
}