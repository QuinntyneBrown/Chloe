using Dtos;
using Services.Contracts;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/bundle")]
    public class BundleController : ApiController
    {
        public BundleController(IBundleService service) { this.service = service; }

        [Route("get")]
        [HttpGet]
        public IHttpActionResult Get()
            => Ok(this.service.Get());

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(BundleDto dto)
            => Ok(this.service.Add(dto));


        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id)
        => Ok(service.Remove(id));

        protected readonly IBundleService service;
    }
}
