import style from "../styles/styleRanking.css"
import Header from "./Header";

function Ranking(){

    return(
        <>
        <Header />
                <main class="container">

                    <h1>Placar de Lideres</h1>

                    <section class="container__tabela">
                        <table>
                            <tr>
                            <th>Nome</th>
                            <th>Pontuação</th>
                            </tr>
                            <tr>
                            <td>Jogador 1</td>
                            <td>10</td>
                            </tr>
                            <tr>
                            <td>Jogador 2</td>
                            <td>8</td>
                            </tr>
                            <tr>
                            <td>Jogador 3</td>
                            <td>6</td>
                            </tr>
                            <tr>
                            <td>Jogador 4</td>
                            <td>4</td>
                            </tr>
                            <tr>
                            <td>Jogador 5</td>
                            <td>2</td>
                            </tr>
                        </table>
                    </section>
                </main>
        </>
    )
}

export default Ranking;