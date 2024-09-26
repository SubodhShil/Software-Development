#include <bits/stdc++.h>
using namespace std;
#define endl "\n"

string EncryptionLogic(string text)
{
    stringstream ss(text);
    string word;
    vector<string> encryptedWords;

    while (ss >> word)
    {
        string resultWord = "";
        for (char &ch : word)
        {
            char currentChar = toupper(ch);
            int charValue = int(currentChar) - 65;
            // cout << charValue << endl;
            char encryptedChar = char(((charValue + 3) % 26) + 65);
            // cout << encryptedChar << " ";
            resultWord += encryptedChar;
        }

        encryptedWords.push_back(resultWord);
    }

    string encryptedText = "";
    for (auto str : encryptedWords)
    {
        // cout << i << endl;
        encryptedText += str + " ";
    }

    return encryptedText;
}

string DecryptionLogic(string text)
{
    stringstream ss(text);
    string word;
    vector<string> decryptedWords;

    while (ss >> word)
    {
        string resultWord = "";
        for (char &ch : word)
        {
            char currentChar = toupper(ch);
            int charValue = int(currentChar) - 65;
            char decryptedChar = char((charValue - 3) % 26);
            resultWord += decryptedChar;
        }

        decryptedWords.push_back(resultWord);
    }

    string decryptedText = "";
    for (auto str : decryptedWords)
    {
        // cout << i << endl;
        decryptedText += str + " ";
    }

    return decryptedText;
}

void Caesar_Cipher()
{
    cin.ignore();
    string text;
    getline(cin, text);

    string encryptedText = EncryptionLogic(text);
    string decryptedText = DecryptionLogic(encryptedText);

    cout << "The original text: " << text << endl;
    cout << "Encrypted text: " << encryptedText << endl;
    cout << "Decrypted text: " << decryptedText << endl;
}

int32_t main()
{
    ios_base::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int t = 1;
    cin >> t;

    while (t--)
        Caesar_Cipher();

    return 0;
}