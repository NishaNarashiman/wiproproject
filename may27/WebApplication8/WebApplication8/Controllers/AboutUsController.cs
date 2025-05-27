using Microsoft.AspNetCore.Mvc;

namespace WebApplication8.Controllers
{
    public class AboutUsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
