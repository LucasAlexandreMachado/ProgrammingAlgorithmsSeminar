class Organizacao:
    def __init__(self, nome, chave_pix, cnpj, endereco, telefone, email, rede_social):
        self.nome = nome
        self.chave_pix = chave_pix
        self.cnpj = cnpj
        self.endereco = endereco
        self.telefone = telefone
        self.email = email
        self.rede_social = rede_social

    def __str__(self):
        return f"Nome: {self.nome}\nChave PIX: {self.chave_pix}\nCNPJ: {self.cnpj}\nEndereço: {self.endereco}\nTelefone: {self.telefone}\nEmail: {self.email}\nRede Social: {self.rede_social}"

class CadastroOrganizacoes:
    def __init__(self):
        self.organizacoes = []

    def cadastrar(self):
        print("- Cadastro de Organização -")
        nome = input("Digite o nome da organização: ")
        chave_pix = input("Digite a chave PIX da organização: ")
        cnpj = input("Digite o CNPJ da organização: ")
        endereco = input("Digite o endereço da organização: ")
        telefone = input("Digite o telefone da organização: ")
        email = input("Digite o email da organização: ")
        rede_social = input("Digite a rede social da organização: ")

        org = Organizacao(nome, chave_pix, cnpj, endereco, telefone, email, rede_social)
        self.organizacoes.append(org)
        print("Organização cadastrada com sucesso!")

    def listar(self):
        print("- Lista de Organizações -")
        for idx, org in enumerate(self.organizacoes, start=1):
            print(f"Organização {idx}:")
            print(org)
            print("-" * 20)

    def editar(self):
        print("- Edição de Organização -")
        
        if not self.organizacoes:
            print("Nenhuma organização cadastrada ainda.")
            return

        self.listar()
        escolha = int(input("Digite o número da organização que deseja editar: "))
        
        if escolha < 1 or escolha > len(self.organizacoes):
            print("Número de organização inválido.")
            return

        org = self.organizacoes[escolha - 1]
        print("Digite os novos dados da organização (deixe em branco para manter o mesmo):")
        org.nome = input(f"Nome atual: {org.nome} - Novo nome: ") or org.nome
        org.chave_pix = input(f"Chave PIX atual: {org.chave_pix} - Nova chave PIX: ") or org.chave_pix
        org.cnpj = input(f"CNPJ atual: {org.cnpj} - Novo CNPJ: ") or org.cnpj
        org.endereco = input(f"Endereço atual: {org.endereco} - Novo endereço: ") or org.endereco
        org.telefone = input(f"Telefone atual: {org.telefone} - Novo telefone: ") or org.telefone
        org.email = input(f"Email atual: {org.email} - Novo email: ") or org.email
        org.rede_social = input(f"Rede Social atual: {org.rede_social} - Nova rede social: ") or org.rede_social
        print("Dados da organização atualizados com sucesso!")

    def excluir(self):
        print("- Exclusão de Organização -")
        
        if not self.organizacoes:
            print("Nenhuma organização cadastrada ainda.")
            return

        self.listar()
        escolha = int(input("Digite o número da organização que deseja excluir: "))
        
        if escolha < 1 or escolha > len(self.organizacoes):
            print("Número de organização inválido.")
            return

        del self.organizacoes[escolha - 1]
        print("Organização excluída com sucesso!")

    def sair(self):
        print("Até logo!")
        return False

def main():
    cadastro = CadastroOrganizacoes()

    while True:
        print()
        print("-=-=-=-=-=-=-=-=-=-=-=-=-=-")
        print("Sistema de Cadastro de Organizações")
        print("-=-=-=-=-=-=-=-=-=-=-=-=-=-")
        print("1 - Cadastrar Organização")
        print("2 - Listar Organizações")
        print("3 - Editar Organização")
        print("4 - Excluir Organização")
        print("5 - Sair do Sistema")
        print("-=-=-=-=-=-=-=-=-=-=-=-=-=-")
        print()

        escolha = input("Escolha uma opção: ")

        if escolha == '1':
            cadastro.cadastrar()
        elif escolha == '2':
            cadastro.listar()
        elif escolha == '3':
            cadastro.editar()
        elif escolha == '4':
            cadastro.excluir()
        elif escolha == '5':
            if not cadastro.sair():
                break
        else:
            print("Opção inválida. Tente novamente.")

if __name__ == "__main__":
    main()