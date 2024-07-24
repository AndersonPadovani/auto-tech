type WidgetType = {
    srcIcon: string,
    titleName: string
}

const WidgetServicos = ({srcIcon, titleName}: WidgetType) => {
    return(
        <div className="flex w-[30%] min-w-max items-center gap-4 text-lg text-slate-100 customHover font-bold">
            <div className="flex items-center justify-center w-14 h-14 bg-color-orange rounded-md">
                <img src={srcIcon} alt="icone de revisão" />
            </div>
            <h3>{titleName}</h3>
        </div>
    )
}

export default WidgetServicos