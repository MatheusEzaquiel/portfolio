export const Badge = ({title, username, link, icon}: any) => {
    /*
    const badgeModel = {
        title: String,
        username: String,
        link: String,
        icon: any
    }*/

    return (
        <a href={link} target="_blank">
            <article className="border-2 border-black rounded-3xl p-3 flex gap-4 items-center lg:mb-4 hover:bg-white hover:border-white">
                    {icon}
                    <p className="card-title">
                        <strong>{title}</strong>
                        <br/>
                        {username}
                    </p>
            </article>
        </a>
    )

}

export const BadgeBall = ({link, icon}: any) => {
    /*
    const badgeModel = {
        title: String,
        username: String,
        link: String,
        icon: any
    }*/

    return (
        <a href={link} target="_blank">
            <article className="border-2 border-black rounded-3xl p-4 flex gap-4 items-center hover:bg-white hover:border-white">
                    {icon}
            </article>
        </a>
    )

}