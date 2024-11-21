import { Stack } from '@mui/material'
import CDSProgressContainer from '../../../components/CDSProgressContainer/CDSProgressContainer'
import { Outlet } from 'react-router-dom'


interface Props {

}

const FactorySetup = (props: Props) => {
    return (
        <Stack spacing={2}>
            <CDSProgressContainer icon={undefined} />
            <Outlet />
        </Stack>
    )
}

export default FactorySetup
