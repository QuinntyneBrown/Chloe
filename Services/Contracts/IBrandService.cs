using Dtos;
using System.Collections.Generic;

namespace Services.Contracts
{
    public interface IBrandService
    {
        BrandDto Add(BrandDto dto);
        bool Remove(int id);
        ICollection<BrandDto> Get();
    }
}
