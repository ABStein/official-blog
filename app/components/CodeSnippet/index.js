import { Code } from 'bright'

function CodeSnippet(props) {
    return (
        <Code
            {...props}
            theme={'one-dark-pro'}
            className='lg:text-sm text-xs'
        />
    )
}

export default CodeSnippet;
