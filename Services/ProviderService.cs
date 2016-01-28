using Data.Contracts;
using Dtos;
using Services.Contracts;
using System.Linq;
using System.Collections.Generic;
using Models;
using System.Data.Entity;

namespace Services
{
    public class ProviderService: IProviderService
    {
        public ProviderService(IModernCmsUow uow)
        {
            this.uow = uow;
        }

        public ProviderDto Add(ProviderDto dto)
        {
            var entity = new Provider();

            if (dto.Id == 0)
            {
                entity = new Provider();
                this.uow.Providers.Add(entity);
            } else
            {
                entity = uow.Providers.GetAll().Where(x => x.Id == dto.Id).Include(x => x.Bundles).Single();
                entity.Bundles = new List<Bundle>();
            }

            entity.Name = dto.Name;
            foreach (var bundle in dto.Bundles)
            {
                if (bundle.Checked == true)
                {
                    entity.Bundles.Add(uow.Bundles.GetById(bundle.Id));
                }
            }

            this.uow.SaveChanges();
            return new ProviderDto(entity);
        }

        public ICollection<ProviderDto> Get()
        {
            return this.uow.Providers
                .GetAll()
                .Where(x => x.IsDeleted == false)
                .ToList()
                .Select(x => new ProviderDto(x)).ToList();
        }

        public bool Remove(int id)
        {
            var entity = uow.Providers.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return true;
        }

        public ICollection<BundleDto> GetBundlesByProviderId(int id)
        {
            return this.uow.Providers
                .GetAll()
                .Where(x => x.Id == id)
                .Include(x => x.Bundles)
                .Single()
                .Bundles
                .Where(x => x.IsDeleted == false)
                .Select(x => new BundleDto(x)).ToList();
        }

        protected readonly IModernCmsUow uow;
    }
}
