import EditorJS from '@editorjs/editorjs';
import Checklist from '@editorjs/checklist';
import Header from '@editorjs/header';
import Table from '@editorjs/table';
import crypto from 'crypto';
import { useEffect } from 'react';

let editor: any;

type EditorProps = {
    onSave: (cleanData: any) => void;
};
export default (props: EditorProps) => {
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
                }
            });
        }
    }, []);
    const onSave = () => {
        editor.save().then((res: any) => props.onSave(res)).catch((err: any) => console.log(err))
    }
    return (
        <div className='flex flex-col items-stretch w-full'>
            <div id={`editorjs-${editorId}`} className="flex-1">
            </div>
            <div className="flex flex-row justify-center">
                <button onClick={onSave} className="action-button px-5 py-2 ">Save</button>
            </div>
        </div>
    );
}