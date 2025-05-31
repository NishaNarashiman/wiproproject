using System;
using System.IO;
using System.Threading;

class MultithreadedFileProcessor
{
    static int totalLines = 0;
    static object lockObject = new object();

    static void Main(string[] args)
    {
        
        string file1 = "file1.txt";
        string file2 = "file2.txt";
        string file3 = "file3.txt";

       
        CreateTestFile(file1, 10);
        CreateTestFile(file2, 15);
        CreateTestFile(file3, 20);

        
        string basePath = AppDomain.CurrentDomain.BaseDirectory;
        file1 = Path.Combine(basePath, file1);
        file2 = Path.Combine(basePath, file2);
        file3 = Path.Combine(basePath, file3);

        
        Thread t1 = new Thread(() => ReadFile(file1));
        Thread t2 = new Thread(() => ReadFile(file2));
        Thread t3 = new Thread(() => ReadFile(file3));

       
        t1.Start();
        t2.Start();
        t3.Start();

        
        t1.Join();
        t2.Join();
        t3.Join();

        Console.WriteLine($"Total lines of all files: {totalLines}");
    }

    
    static void CreateTestFile(string fileName, int numLines)
    {
        string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, fileName);
        if (!File.Exists(path))
        {
            using (StreamWriter writer = new StreamWriter(path))
            {
                for (int i = 1; i <= numLines; i++)
                {
                    writer.WriteLine($"This is line {i} in {fileName}");
                }
            }
        }
    }

    
    static void ReadFile(string filePath)
    {
        int lineCount = 0;

        try
        {
            using (StreamReader reader = new StreamReader(filePath))
            {
                while (reader.ReadLine() != null)
                {
                    lineCount++;
                }
            }

            lock (lockObject)
            {
                totalLines += lineCount;
            }

            Console.WriteLine($"{Path.GetFileName(filePath)}: {lineCount} lines");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error reading {filePath}: {ex.Message}");
        }
    }
}