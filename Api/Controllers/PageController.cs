using Dtos;
using Services.Contracts;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/page")]
    public class PageController : ApiController
    {
        public PageController(IPageService service) { this.service = service; }

        [Route("get")]
        [HttpGet]
        public IHttpActionResult Get()
            => Ok(this.service.Get());

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(PageDto dto)
            => Ok(this.service.Add(dto));


        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id)
            => Ok(service.Remove(id));

        protected readonly IPageService service;
    }
}
