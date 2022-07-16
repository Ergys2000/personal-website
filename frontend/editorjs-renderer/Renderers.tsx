import { Heading, HStack, Stack, Table, TableContainer, Tbody, Td, Text, Thead, Tr } from "@chakra-ui/react";
import { Block, Renderer } from "./types";

interface ParagraphBlock extends Block {
    id: string;
    type: string;
    data: {text: string;}
}
const Paragraph: Renderer = (props: {block: ParagraphBlock}) => {
    const block = props.block;
    return (
        <Text color={"gray.300"}>{block.data.text}</Text>
    );
}

interface HeaderBlock extends Block {
    id: string;
    type: string;
    data: {text: string; level: number;}
}
const Header: Renderer = (props: {block: HeaderBlock}) => {
    const block = props.block;
    switch(block.data.level) {
        case 1:
            return <Heading as="h1" color={"gray.300"} size={"2xl"}>{block.data.text}</Heading>
        case 2:
            return <Heading as="h2" color={"gray.300"} size={"lg"}>{block.data.text}</Heading>
        case 3:
            return <Heading as="h3" color={"gray.300"} size={"md"}>{block.data.text}</Heading>
        case 4:
            return <Heading as="h4" color={"gray.300"} size={"sm"}>{block.data.text}</Heading>
        default:
            return <Heading as="h2" color={"gray.300"} size={"lg"}>{block.data.text}</Heading>
    }
}

interface CheckListBlock extends Block {
    type: string;
    data: {
        items: {text: string; checked: boolean}[];
    };
}
const Checklist: Renderer = (props: {block: CheckListBlock}) => {
    const checkListBlock = props.block;
    return (
        <Stack spacing="3">{checkListBlock.data.items.map(item => {
            const color = item.checked ? {color: '#06ad00'} : {color: '#ad0000'};
            return (
                <HStack spacing={2}>
                    <i style={color} className={`material-icons`}>{item.checked ? 'check' : 'disabled_by_default'}</i>
                    <Text color={"gray.300"} className="">{item.text}</Text>
                </HStack>
            );
        })}</Stack>
    );
}

interface TableBlock extends Block {
    type: string;
    data: {
        withHeadings: boolean;
        content: string[][];
    }
}
const TableRenderer: Renderer = (props: {block: TableBlock}) => {
    const tableBlock = props.block;
    return (
        <TableContainer color={"gray.700"}>
            <Table variant={"striped"} colorScheme={"green"}>
                <Thead></Thead>
                <Tbody>
                    {tableBlock.data.content.map((row, id) => {
                        return (
                            <Tr color={id % 2 !=0 ? 'gray.300': ''} key={id}>
                                {row.map((val, id) => <Td key={id}>{val}</Td>)}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export {
    Paragraph,
    Header,
    Checklist,
    TableRenderer
}