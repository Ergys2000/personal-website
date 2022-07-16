import { Stack, TagLabel } from "@chakra-ui/react";
import { Checklist, Header, Paragraph, TableRenderer } from "./Renderers";
import { CleanData, RenderersObject } from "./types";

type RendererProps = {
    cleanData: CleanData;
    renderersObject?: RenderersObject;
}
export default function EditorJsRenderer(props: RendererProps) {
    const {cleanData, renderersObject } = props;
    const defaultRenderers = {
        'paragraph': Paragraph,
        'header': Header,
        'checklist': Checklist,
        'table': TableRenderer,
    };
    const finalRenderers: RenderersObject = {...defaultRenderers, ...renderersObject};
    return (
        <div className="editorjs-renderer">
            <Stack spacing={3}> 
                {cleanData.blocks.map(block => { 
                    if(finalRenderers[block.type]) {
                        let Component = finalRenderers[block.type];
                        return <Component block={block} /> 
                    } else {
                        return <div></div> 
                }})}
            </Stack>
        </div>
    );
}