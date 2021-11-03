import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../store/reducers/userReducer'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export default useTypedSelector
