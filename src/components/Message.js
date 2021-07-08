import { Alert } from "react-bootstrap"

const Message = ({ variant, children }) => {
    return (
        <Alert varinat={variant}>
            {children}
        </Alert>
    )
}

Message.defaultProps = {
    variant: "info",
}

export default Message