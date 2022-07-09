import { Block, Renderer } from "./types";

interface ParagraphBlock extends Block {
    id: string;
    type: "paragraph";
    data: {text: string;}
}
const Paragraph: Renderer = (props: {block: Block}) => {
    const block = props.block as ParagraphBlock;
    return (
        <p>{block.data.text}</p>
    );
}

interface HeaderBlock extends Block {
    id: string;
    type: "header";
    data: {text: string; level: number;}
}
const Header: Renderer = (props: {block: Block}) => {
    const block = props.block as HeaderBlock;
    switch(block.data.level) {
        case 1:
            return <h1>{block.data.text}</h1>
        case 2:
            return <h2>{block.data.text}</h2>
        case 3:
            return <h3>{block.data.text}</h3>
        case 4:
            return <h4>{block.data.text}</h4>
        default:
            return <h2>{block.data.text}</h2>
    }
}

type CheckListBlock = {
    type: 'checklist';
    data: {items: CheckListItem[]};
}
type CheckListItem = {
    text: string;
    checked: boolean;
}
const Checklist: Renderer = (props: {block: Block}) => {
    const checkListBlock = props.block as CheckListBlock;
    return (
        <div className="flex flex-col">{checkListBlock.data.items.map(item => {
            return (
                <div className="flex flex-row">
                    <i className="material-icons">{item.checked ? 'done' : 'disabled_by_default'}</i>
                    <p>{item.text}</p>
                </div>
            );
        })}</div>
    );
}



export {
    Paragraph,
    Header,
    Checklist,
}