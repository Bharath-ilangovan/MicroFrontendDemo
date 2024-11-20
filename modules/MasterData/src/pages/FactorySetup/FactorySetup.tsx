import { Outlet } from 'react-router-dom'
import { Stack } from '@mui/material'
import CDSProgressContainer from '../../components/CDSProgressContainer/CDSProgressContainer'


const FactorySetup = () => {
    return (
        <Stack spacing={2}>
            <CDSProgressContainer icon={undefined} />
            <Outlet />
        </Stack>
    )
}

export default FactorySetup
