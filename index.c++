#include <iostream>
using namespace std;

int main() {
    int nivel = 1;
    int pontos = 0;
    int vidaTanque = 100;

    while (vidaTanque > 0 && nivel <= 5) {
        int vidaBoss = 100 * nivel;
        int danoTanque = 25;
        int danoBoss = 10 + nivel * 5;

        cout << "\n=== NIVEL " << nivel << " ===\n";
        cout << "Um boss apareceu!\n";
        cout << "Vida do boss: " << vidaBoss << "\n";

        while (vidaBoss > 0 && vidaTanque > 0) {
            cout << "\nSua vida: " << vidaTanque;
            cout << "\nVida do boss: " << vidaBoss;
            cout << "\n1 - Atirar\n2 - Reparar (uma vez por nivel)\n";
            cout << "Escolha: ";

            int escolha;
            cin >> escolha;

            if (escolha == 1) {
                vidaBoss -= danoTanque;
                cout << "Voce acertou o boss!\n";
            } else {
                cout << "Voce perdeu um turno!\n";
            }

            if (vidaBoss > 0) {
                vidaTanque -= danoBoss;
                cout << "O boss atacou! Dano: " << danoBoss << "\n";
            }
        }

        if (vidaTanque <= 0) {
            cout << "\nSeu tanque foi destruido!\n";
            break;
        }

        pontos += 1000;
        cout << "\nBOSS DERROTADO! +1000 PONTOS!\n";
        cout << "Total de pontos: " << pontos << "\n";

        nivel++;
        vidaTanque = 100;
    }

    if (nivel > 5) {
        cout << "\nPARABENS! VOCE VENCEU TODOS OS NIVEIS!\n";
        cout << "Pontuacao final: " << pontos << "\n";
    }

    return 0;
}
