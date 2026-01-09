export type ButtonType = {
    title: string
    callback: () => void
    className?: string

}

export const Button = ({title, callback, className}: ButtonType) => {
    return <button className={className} onClick={callback}>{title}</button>
};

