import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkService } from "./work.service";
import { WorkGrpcControllerBase } from "./base/work.grpc.controller.base";

@swagger.ApiTags("works")
@common.Controller("works")
export class WorkGrpcController extends WorkGrpcControllerBase {
  constructor(protected readonly service: WorkService) {
    super(service);
  }
}
