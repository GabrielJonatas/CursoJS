const submit = document.querySelector('#enviar');

submit.addEventListener('click', function(e) {
    e.preventDefault();
    const nome = document.querySelector('#nome');
    const sobrenome = document.querySelector('#sobrenome');
    const CPF = document.querySelector('#cpf');
    const usuario = document.querySelector('#usuario');
    const senha = document.querySelector('#senha');
    const repetirSenha = document.querySelector('#repetirSenha');
    const validador = new ValidaForm(nome.value,sobrenome.value,CPF.value,usuario.value,senha.value,repetirSenha.value);
    validador.validador();
} );

class ValidaForm{
    constructor(nome,sobrenome,CPF,usuario,senha,repetirSenha) {
        this.formulario = document.querySelector('.form');
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.CPF = CPF;
        this.usuario = usuario;
        this.senha = senha;
        this.repetirSenha = repetirSenha;
    }

    criaP () {
        const p = document.createElement('p');
        return p;
    }

    /*criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('msg');
        campo.insertAdjacentElement('afterend', div);
    }*/

    verificaVazio (campo,id,info) {
        if (!campo) {
            const section = document.querySelector(`#${id}`);
            
            //this.criaErro(section, `Campo "${info}" não pode estar vazio`);

            const p = this.criaP();
            p.classList.add('msg');
            p.innerHTML = `Campo "${info}" não pode estar vazio`;
            section.appendChild(p);
            this.valida = false;
        };
    }

    verificaCaractere (campo,n,m) {
        const array = Array.from(campo);
        const tamanho = array.length;
        return tamanho < n || tamanho > m;
    }

    verificaTipo (campo) {
        return campo.match(/[a-zA-Z0-9]+$/g);
    }

    validador () {
        const identificadores = ["Nome","Sobrenome","CPF","Usuário","Senha","Repetir senha"];
        const campos = [this.nome,this.sobrenome,this.CPF,this.usuario,this.senha,this.repetirSenha];
        let valida = true;

        for(let i in campos) {
           
            if (identificadores[i] == "CPF") {
                const section = document.querySelector("#CPF");
                section.innerHTML = '';
                this.verificaVazio(campos[i],identificadores[i],identificadores[i]);
                const validaCPF = new ValidaCPF(this.CPF);
            
            if (!validaCPF.valida()) {
                const p = this.criaP();
                p.classList.add('msg');
                p.innerHTML = `Digite um CPF valido`;
                section.appendChild(p);
                valida = false;
            }
            continue;
        };

          if (identificadores[i] == "Usuário") {
            const section = document.querySelector("#Usuário");
            section.innerHTML = '';

            if (!this.verificaTipo(campos[i])) {
                const p = this.criaP();
                p.classList.add('msg');
                p.innerHTML = `Usuário inválido`;
                section.appendChild(p);
                valida = false; 
            }
            
            if (this.verificaCaractere(campos[i],3,12)) {
                const p = this.criaP();
                p.classList.add('msg');
                p.innerHTML = `Usuário deve ter entre 3 e 12 caracteres`;
                section.appendChild(p);
                valida = false;
            }
            this.verificaVazio(campos[i],identificadores[i],identificadores[i]);
            continue;
        }

          if (identificadores[i] == "Senha") {
            const section = document.querySelector("#Senha");
            section.innerHTML = '';
            if (this.verificaCaractere(campos[i],6,12)) {
                const p = this.criaP();
                p.classList.add('msg');
                p.innerHTML = `Senha entre 6 e 12 caracteres`;
                section.appendChild(p);
                valida = false;
            }
            const array = campos[i];
            const array2 = campos[5];
            if (array != array2) {
                const p = this.criaP();
                p.classList.add('msg');
                p.innerHTML = `Campo senha e repetir senha devem ser iguais`;
                section.appendChild(p);
                valida = false;
            }
            this.verificaVazio(campos[i],identificadores[i],identificadores[i]);
            continue;
        }
    
          if (identificadores[i] == "Repetir senha") {
            const section = document.querySelector("#RepetirSenha");
            section.innerHTML = '';
            this.verificaVazio(campos[i],"RepetirSenha",identificadores[i]);
            continue;
        }
        const section = document.querySelector(`#${identificadores[i]}`);
        section.innerHTML = '';
        this.verificaVazio(campos[i],identificadores[i],identificadores[i]);

        }

        if(valida) {
            alert('Formulário enviado');
            this.formulario.submit();
        }
    }
}
