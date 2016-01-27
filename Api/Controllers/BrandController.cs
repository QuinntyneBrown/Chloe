using Dtos;
using Services.Contracts;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/brand")]
    public class BrandController : ApiController
    {        
        public BrandController(IBrandService service) { this.service = service; }

        [Route("get")]
        [HttpGet]
        public IHttpActionResult Get() 
            => Ok(this.service.Get());

        [Route("getAllIncludingChildren")]
        [HttpGet]
        public IHttpActionResult GetAllIncludingChildren()
            => Ok(this.service.GetAllIncludingChildren());

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(BrandDto dto)
            => Ok(this.service.Add(dto));
        
        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id)
            => Ok(service.Remove(id));

        protected readonly IBrandService service;
    }
}
