import { Block } from '../types';

export function paragraphParser(block: Block): string {
    const text = block.data.text;
    return `<p>${text}</p>`;
}

export function headerParser(block: Block): string {
    const text = block.data.text;
    const level = block.data.level;
    return `<h${level}>${text}</h${level}>`;
}

export function checklist(block: Block): string {
    const items = block.data.items;
    return ``;
}