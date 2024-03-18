import { Code } from 'bright'
import { fileIcons, titleBar } from '@/app/extension'


function CodeSnippet(props) {
    return (
        <Code
            codeClassName='lg:text-sm text-xs'
            {...props}
            theme={'dracula'}
            extensions={[fileIcons, titleBar]}
        />
    )
}

export default CodeSnippet;
