using System.Globalization;
using System;
using System.IO;

Start.Main(Array.Empty<string>());

public static class Start
{
    private static readonly string READ_FILE_PATH = $@"C:\Data\StepIndex\Rates\M1.csv";
    private static readonly string SAVE_FILE_PATH = $@"C:\Data\StepIndex\Rates\M1.js";

    public static void Main(string[] args)
    {
        Console.Title = "Amshy - Data Compiler";

        var priceInfoList = new List<PriceInfo>();

        try
		{
            using (var streamReader = new StreamReader(READ_FILE_PATH))
            {
                _ = streamReader.ReadLine();

                Console.WriteLine("Reading..");

                while (!streamReader.EndOfStream)
                    priceInfoList.Add(new PriceInfo(streamReader.ReadLine().Split('\t')));

                Console.WriteLine("Done reading");
            }

            using (var streamWriter = new StreamWriter(SAVE_FILE_PATH))
            {
                Console.WriteLine("Writing");

                streamWriter.Write($"const priceInfoArray = [{priceInfoList[0].ToString()}");

                for(int i = 1; i < priceInfoList.Count; i++)
                {
                    streamWriter.Write(", " + priceInfoList[i].ToString());
                }

                streamWriter.Write("];");

                Console.WriteLine("Done writing");
            }
        }
		catch (Exception)
		{

		}

        Console.ReadKey();
    }
}

public struct PriceInfo
{
    public DateTime DateTime { get; set; }
    public float Open { get; set; }
    public float High { get; set; }
    public float Low { get; set; }
    public float Close { get; set; }

    public PriceInfo(string[] data)
    {
        DateTime = Convert.ToDateTime($"{data[0]} {data[1]}");

        Open = float.Parse(data[2], CultureInfo.InvariantCulture.NumberFormat);
        High = float.Parse(data[3], CultureInfo.InvariantCulture.NumberFormat);
        Low = float.Parse(data[4], CultureInfo.InvariantCulture.NumberFormat);
        Close = float.Parse(data[5], CultureInfo.InvariantCulture.NumberFormat);
    }
    public string ToString(string format = "jso")
    {
        if (format == "jso")
            return $"{{open: {Open}, high: {High}, low: {Low}, close: {Close}}}";
        else
            return "";
    }
}