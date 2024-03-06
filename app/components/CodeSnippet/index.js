import { Code } from 'bright'

function CodeSnippet(props) {
    return (
        <Code
            codeClassName='lg:text-sm text-xs'
            {...props}
            theme={'dracula'}
        />
    )
}

export default CodeSnippet;
