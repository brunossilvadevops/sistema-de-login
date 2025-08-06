// Função para pegar a lista de usuários cadastrados do localStorage
function getUsuarios() {
  return JSON.parse(localStorage.getItem('usuarios')) || [];
}

// Salva a lista de usuários atualizada no localStorage
function salvarUsuarios(usuarios) {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Cadastra um novo usuário
function cadastrar() {
  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value;

  // Verifica se os campos estão preenchidos
  if (!usuario || !senha) {
    mostrarMensagem("Preencha todos os campos!");
    return;
  }

  let usuarios = getUsuarios();

  // Verifica se o usuário já existe
  if (usuarios.some(u => u.usuario === usuario)) {
    mostrarMensagem("Usuário já existe!");
    return;
  }

  // Adiciona o novo usuário à lista e salva
  usuarios.push({ usuario, senha });
  salvarUsuarios(usuarios);

  mostrarMensagem("Usuário cadastrado com sucesso!");
}

// Realiza o login
function login() {
  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value;

  let usuarios = getUsuarios();

  // Verifica se o usuário e senha existem e são válidos
  const encontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (encontrado) {
    // Redireciona para a página de usuários se login for bem-sucedido
    window.location.href = "usuarios.html";
  } else {
    mostrarMensagem("Usuário ou senha incorretos.");
  }
}

// Exibe mensagens na tela
function mostrarMensagem(msg) {
  document.getElementById('mensagem').textContent = msg;
}
