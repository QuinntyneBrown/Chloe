using System.Data.Entity;
using System.Collections.Generic;
using Dtos;
using Services.Contracts;
using Data.Contracts;
using System.Linq;
using Models;

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
            var brand = new Brand() { Name = dto.Name };
            this.uow.Brands.Add(brand);
            this.uow.SaveChanges();
            return new BrandDto(brand);
        }

        public ICollection<BrandDto> Get()
        {
            return this.uow.Brands
                .GetAll()
                .Where(x => x.IsDeleted == false)
                .ToList()
                .Select(x => new BrandDto(x)).ToList();
        }

        public bool Remove(int id)
        {
            var entity = uow.Brands.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return true;
        }

        public ICollection<BrandDto> GetAllIncludingChildren()
        {
            var dtos = new List<BrandDto>();            
            var brands = this.uow.Brands
            .GetAll()
            .Include(x => x.Providers)
            .Include("Providers.Bundles")
            .Where(x => x.IsDeleted == false)
            .ToList();
            foreach(var brand in brands)
            {
                brand.Providers = brand.Providers.Where(x => x.IsDeleted == false).ToList();                
                foreach(var provider in brand.Providers)
                {
                    provider.Bundles = provider.Bundles.Where(x => x.IsDeleted == false).ToList();
                }
                dtos.Add(new BrandDto(brand));
            }
            return dtos;
        }

        protected readonly IModernCmsUow uow;
    }
}
