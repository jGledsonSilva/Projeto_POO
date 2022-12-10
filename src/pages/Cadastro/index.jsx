import { Button } from "@mui/material";
import { BaseLayout } from "../../shared/components/layouts/BaseLayout";

export const Cadastro = () => {
    return (
        <BaseLayout>
            <div>
                <h1>Página de cadastro</h1>
                <Button variant="contained" size="large" href="pagina-inicial">Voltar para a página inicial</Button>
            </div>
        </BaseLayout>
    )
}

export default Cadastro