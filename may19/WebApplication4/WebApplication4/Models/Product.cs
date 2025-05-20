using System.ComponentModel;
using System.Globalization;

namespace WebApplication4.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        
        public decimal Price { get; set; }
        
        public string ProductDescription { get; set; }
    }
    
}
