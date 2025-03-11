import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

////PARA INICIAR O SERVIDOR USAR O COMANDO ABAIXO, ENTRE NA PASTA SOURCE (src)
//// npm run dev

//// base para as requisições - PAYLOAD CRIME - http://localhost:3000/api/crimes
///// ------------------- requisição POST -------------------
////{
////  "nome": "Furto",
////  "descricao": "Furto em residência durante a madrugada",
////  "endereco": "Rua das Flores, 123",
////  "coordenadas": {
////    "lat": -23.56789,
////    "lng": -46.67890
////  }
////}
////------------------- requisição PUT -------------------
////{
////  "nome": "Roubo",
////  "descricao": "Roubo à mão armada em estabelecimento comercial",
////  "endereco": "Avenida Central, 456",
////  "coordenadas": {
////    "lat": -23.12345,
////    "lng": -46.54321
////  }
////}
////------------------- requisição PATCH -------------------
////{
////  "nome": "Roubo",
////  "descricao": "Roubo à mão armada em estabelecimento comercial",
////  "endereco": "Avenida Central, 456",
////  "coordenadas": {
////    "lat": -23.12345,
////    "lng": -46.54321
////  }
////}
////------------------- requisição DELETE é deletado pelo ID  -------------------
//// base para as requisições - PAYLOAD DENUNCIA - http://localhost:3000/api/denuncias
////{
////  "descricao": "Suspeita de envolvimento em furto, atividade observada em local de risco.",
////  "nomeDenunciante": "João da Silva",
////  "endereco": "Av. Brasil, 789",
////  "coordenadas": {
////    "lat": -23.45678,
////    "lng": -46.12345
////  }
////}

////------------------- requisição PUT -------------------
////{
////  "descricao": "Suspeita de envolvimento em furto, atividade observada em local de risco.",
////  "nomeDenunciante": "João da Silva",
////  "endereco": "Av. Brasil, 789",
////  "coordenadas": {
////    "lat": -23.45678,
////    "lng": -46.12345
////  }
////}
////------------------- requisição PATCH -------------------
////{
////  "descricao": "Suspeita de envolvimento em furto, atividade observada em local de risco.",
////  "nomeDenunciante": "João da Silva",
////  "endereco": "Av. Brasil, 789",
////  "coordenadas": {
////    "lat": -23.45678,
////    "lng": -46.12345
////  }
////}
////------------------- requisição DELETE é deletado pelo ID  -------------------
//// LOGIN - http://localhost:3000/api/login
////{ {
////  "username": "admin",
////  "password": "123456"
////}
