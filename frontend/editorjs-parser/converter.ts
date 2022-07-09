import {paragraphParser, headerParser} from "./parsers/paragraph";
import { CleanData, ParsersObject } from "./types";

export default function cleanDataToHTML(cleanData: CleanData, parsersObject: ParsersObject): string {
    let result = "<div>";
    cleanData.blocks.forEach(block => {
        if(parsersObject[block.type]) {
            console.log("Found parser for type!")
            const parser = parsersObject[block.type];
            result += parser(block);
        }
        result += '<br />';
        console.log("Not Found parser for type!")
    });
    return result + "</div>";
}

const defaultParsersObject = {
    'paragraph': paragraphParser,
    'header': headerParser,
}

export {
    defaultParsersObject
}; 