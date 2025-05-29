using Microsoft.AspNetCore.Mvc;

using WebApplication9.Models;

namespace EmployeeManagementSystem.Controllers
{
    public class ContactController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(Contact contact)
        {
            
            ViewBag.Message = "Thank you for contacting us!";
            return View();
        }
    }
}
