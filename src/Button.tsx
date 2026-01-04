export type ButtonType = {
    title: string
    callback: () => void

}

export const Button = ({title, callback}: ButtonType) => {
    return <button onClick={callback}>{title}</button>
};

