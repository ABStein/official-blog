import { Code } from 'bright'
import styles from './CodeSnippet.module.scss'

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
