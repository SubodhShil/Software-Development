using System;
using System.Text;

class Program
{
    public static void Main(string[] args)
    {
        string sentence = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

        // summarizeText(sentence, 25);
        f1();
    }

    public static void summarizeText(string sentence, int maxLength = 20)
    {
        string summarizeSentence = "";

        if (sentence.Length <= maxLength)
        {
            Console.WriteLine(sentence);
        }
        else
        {
            var words = sentence.Split(' ');
            int totalWordsSize = 0;
            foreach (var word in words)
            {
                int currentWordSize = word.Length;
                Console.WriteLine($"Current Word: {word}, size: {currentWordSize}");
                if (totalWordsSize + currentWordSize <= maxLength)
                {
                    totalWordsSize += word.Length;
                    summarizeSentence += word + " ";
                }
                else
                    break;
            }

            summarizeSentence = summarizeSentence.Remove(summarizeSentence.Length - 1);
            summarizeSentence += "...";

            Console.WriteLine($"\n{summarizeSentence}");
        }
    }

    public static void f1()
    {
        StringBuilder sb = new StringBuilder();
        sb
            .Append('-', 14)
            .AppendLine("\nSyllabus")
            .Append('-', 14);   

        sb.Replace('-', '+');
        sb.Insert(15, new string("New "));
        System.Console.WriteLine(sb);
    }
}