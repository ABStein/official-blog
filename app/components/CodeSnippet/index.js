'use server';
import { Code } from 'bright'

function CodeSnippet(props) {
    return (
        <Code
            lineNumbers={true}
            {...props}
            theme={'dracula'}
        />
    )
}

export default CodeSnippet;
