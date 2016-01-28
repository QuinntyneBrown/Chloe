using Dtos;
using System.Collections.Generic;

namespace Services.Contracts
{
    public interface IBrandService
    {
        BrandDto Add(BrandDto dto);
        bool Remove(int id);
        ICollection<BrandDto> Get();
        ICollection<BrandDto> GetAllIncludingChildren();
        ICollection<ProviderDto> GetProvidersByBrandId(int id);
        ICollection<PageDto> GetPagesByBrandId(int id);
    }
}
