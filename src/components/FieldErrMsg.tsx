interface FieldErrMsgProps {
    msg: string;
    show?: boolean;
}

export function FieldErrMsg({msg, show}: Readonly<FieldErrMsgProps>) {
    if (show === false || !msg) return null;
    return <p className="text-red-500 text-medium m-1">{msg}</p>;
}