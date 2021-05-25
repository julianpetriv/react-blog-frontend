import cn from 'classnames';
import Spinner from './'

const PageSpinner = (props) => (
    <div className={cn('spinnermodal', { 'open': props.isLoading })}>
        <Spinner/>
    </div>
)

export default PageSpinner;