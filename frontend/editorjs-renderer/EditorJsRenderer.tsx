import { CleanData, RenderersObject } from "./types";

type RendererProps = {
    cleanData: CleanData;
    renderersObject: RenderersObject;
}
export default function EditorJsRenderer(props: RendererProps) {
    const {cleanData, renderersObject } = props;
    return (
        <div className="editorjs-renderer">{cleanData.blocks.map(block => {
            if(renderersObject[block.type]) {
                let Component = renderersObject[block.type];
                return <Component block={block} />
            } else {
                return <div></div>
            }
        })}</div>
    );
}