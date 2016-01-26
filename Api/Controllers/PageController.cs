using Data.Contracts;
using System.Web.Http;

namespace Api.Controllers
{
    public class PageController : ApiController
    {
        public PageController(ISubscribeToProviderUow uow)
        {
            this.uow = uow;
        }

        protected readonly ISubscribeToProviderUow uow;
    }
}
