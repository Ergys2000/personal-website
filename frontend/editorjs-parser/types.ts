export type Block = {
    type: string;
    data: any;
}

export type CleanData = {
    time: string;
    blocks: Block[];
    version: string;
};

export type ParserFunction = (block: Block) => string;

export type ParsersObject = {
    [type: string]: ParserFunction;
}

export type CleanDataParser = (cleanData: CleanData, parsersObject: ParsersObject) => string;