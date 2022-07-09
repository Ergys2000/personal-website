import { ReactNode } from "react";

export type Block = {
    id: string;
    type: string;
    data: any;
}

export type CleanData = {
    time: string;
    blocks: Block[];
    version: string;
};

export type Renderer = ((props: {block: Block}) => JSX.Element)
export type RenderersObject = {
    [name: string]: Renderer;
}