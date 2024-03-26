import { Code } from 'bright'
import { titleBar } from '@/app/extension'


function CodeSnippet(props) {
    return (
        <Code
            codeClassName='lg:text-sm text-xs'
            {...props}
            theme={'dracula'}
            extensions={[titleBar]}
        />
    )
}

export default CodeSnippet;
