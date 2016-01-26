using System;
using System.Collections.Generic;
using Dtos;
using Services.Contracts;
using Data.Contracts;
using System.Linq;

namespace Services
{
    public class BrandService : IBrandService
    {
        public BrandService(IModernCmsUow uow)
        {
            this.uow = uow;
        }

        public BrandDto Add(BrandDto dto)
        {
            throw new NotImplementedException();
        }

        public ICollection<BrandDto> Get()
        {
            var o = this.uow.Brands
                .GetAll()
                .Where(x => x.IsDeleted == false)
                .ToList();

            return o.Select(x=> new BrandDto(x)).ToList();
        }

        public bool Remove(int id)
        {
            throw new NotImplementedException();
        }

        protected readonly IModernCmsUow uow;
    }
}
