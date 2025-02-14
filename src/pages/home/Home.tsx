function Home() {
    return (
        <div className="flex justify-center bg-indigo-900">
            <div className="container grid grid-cols-2 text-white">
                <div className="flex flex-col items-center justify-center gap-4 py-4" >
                    <h2 className="text-5xl font-bold ">Seja Bem Vinde!</h2>
                    <p className="text-xl">
                        Expresse aqui seus pensamentos e
                        opiniões
                    </p>

                    <div className="flex justify-around gap-4">
                        <div className="rounded border-white border-solid border-2 py-2 px-4 text-white hover:drop-shadow-[2px_2px_4px_red]" >
                                   <a href="#" className="hover:drop-shadow-[2px_2px_4px_red]">Nova postagem</a> 
                        </div>
                    </div>
                </div>
 
                <div className="flex justify-center">
                    <img
                        src="https://i.imgur.com/VpwApCU.png"
                        alt="Imagem da Página Home"
                        className="w-2/3"
                    />
                </div>
            </div>
        </div>
    )
}
 
export default Home