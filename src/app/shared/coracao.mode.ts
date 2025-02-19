export class Coracao {
  constructor(
    public cheio: boolean,
    public urlCoracaoCheio: string = '/coracao_cheio.png',
    public urlCoracaoVazio: string = '/coracao_vazio.png'
  ) {}

  public exibeCoracao(): string {
    return this.cheio ? this.urlCoracaoCheio : this.urlCoracaoVazio; //operador ternário se verdadeiro retorna cheio, se false retorna vazio
  }
}
