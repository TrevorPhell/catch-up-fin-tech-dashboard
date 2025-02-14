import { useState } from "react"
import Input from "../components/reusable_components/Input"

const TransferFundsForm = () => {
    const [receipient, setRecepient] = useState("")
    console.log(receipient)

    return (
        <div>
            <form
                className="space-y-4"    
            >
                <Input 
                    type="text"
                    placeholder="Recepient"
                    value={receipient}
                    label="Recepient"
                    onChange={(e) => setRecepient(e.target.value)}
                />
            </form>
        </div>
    )
}

export default TransferFundsForm
