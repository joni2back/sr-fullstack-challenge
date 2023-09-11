import {
    useState,
} from 'react'

const useHooks = () => {
    
    const [requesting, setRequesting] = useState(false)
    const [deliveries, setDeliveries] = useState()
    const [selectedDelivery, setSelectedDelivery] = useState()

    return {
        requesting,
        setRequesting,
        deliveries,
        setDeliveries,
        selectedDelivery,
        setSelectedDelivery,
    }
}

export default useHooks
